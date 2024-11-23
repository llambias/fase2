from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.core import serializers
from django.http import Http404, HttpResponseNotAllowed
from django.views.decorators.csrf import csrf_exempt
from .models import Tasks, Epic
import json


## Tasks
# create
@csrf_exempt
def create_a_new_task(request):
    if request.method == 'POST':
        print('-------------------a')
        body = json.loads(request.body.decode('utf-8'))
        print(body)
        try:
            
            new_title = body.get("titulo")
            new_status = body.get("status")
            new_completed = body.get("completed")
            
        except KeyError:
            raise HttpResponse(status=204)
        
        new_task = Tasks(titulo=new_title, status =new_status, 
                               completed=new_completed)
        new_task.save()
        
        return HttpResponse(status=200)
    else:
        raise HttpResponseNotAllowed("Method is not supported")
## read
def get_all_tasks(request):
    query_set = Tasks.objects.all()
    data = serializers.serialize("json", query_set)
    return HttpResponse(data)

def get_task_by_id(request, task_id):
    try:
        query_set = Tasks.objects.filter(pk=task_id)
    except Tasks.DoesNotExist:
        raise Http404("task does not exist")
    data = serializers.serialize("json", query_set)
    return HttpResponse(data)
## update
def update_task_by_id(request, task_id):
    if request.method == 'PUT':
        body = json.loads(request.body.decode('utf-8'))
        new_title = body.get("titulo")
        new_status = body.get("status")
        new_completed = body.get("completed")
        try:
            task = Tasks.objects.get(pk=task_id)
        except Tasks.DoesNotExist:
            raise Http404("task does not exist")
        task.titulo=new_title
        task.status =new_status
        task.completed=new_completed
        task.save()
        
        return HttpResponse(status=200)
    else:
        raise HttpResponseNotAllowed("Method is not supported")

## delete
def delete_task_by_id(request, task_id):
    if request.method == 'DELETE':
        try:
           task = Tasks.objects.get(pk=task_id)
        except Tasks.DoesNotExist:
            raise Http404("Tasks does not exist")
        
        task.delete()
        return HttpResponse(status=200)
    else:
        raise HttpResponseNotAllowed("Method is not supported")

## Epic
##Create
def create_a_new_epic(request):
    if request.method == 'POST':
        body = json.loads(request.body.decode('utf-8'))
        new_name = body.get("epic")
        
       
        epic = Epic(name=new_name)
        
        new_name.save()
        epic.tasks.add(new_name)
        epic.save()
        return HttpResponse(status=200)
    else:
        raise HttpResponseNotAllowed("Method is not supported")
#read
def get_all_epics(request):
    if request.method == 'GET':
        query_set = Epic.objects.all()
        data = serializers.serialize("json", query_set)
        return HttpResponse(data)

def get_epic_by_id(request, task_id):
    try:
        query_set = Epic.objects.filter(pk=task_id)
    except Epic.DoesNotExist:
        raise Http404("Epic does not exist")
    data = serializers.serialize("json", query_set)
    return HttpResponse(data)

#delete
def delete_task_by_id(request, epic_id):
    if request.method == 'DELETE':
        try:
           task = Epic.objects.get(pk=epic_id)
        except Epic.DoesNotExist:
            raise Http404("Epic does not exist")
        
        task.delete()
        return HttpResponse(status=200)
    else:
        raise HttpResponseNotAllowed("Method is not supported")