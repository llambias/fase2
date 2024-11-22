from django.db import models

# Create your models here.

class Tasks(models.Model):
   titulo = models.CharField(max_length=200)
   status = models.CharField(max_length=15)
   completed = models.BooleanField(default=0)
   
   def __str__(self):
      return self.name

class Epic(models.Model):
    tasks = models.ManyToManyField(Tasks)
    
    def __str__(self):
        return self.name
