from django.urls import path
from . import views

urlpatterns = [
    path('tasks/new', views.create_a_new_task, name='create_a_new_task'),
    path('tasks/', views.get_all_tasks, name='get_all_tasks'),
    path('tasks/<int:task_id>/', views.get_task_by_id, name='get_task_by_id'),
    path('tasks/patch/<int:task_id>/', views.update_task_by_id, name='update_task_by_id'),
    path('tasks/delete/<int:task_id>/', views.delete_task_by_id, name='delete_task_by_id'),
]