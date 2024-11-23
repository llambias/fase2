from django.db import models

# Create your models here.

class Tasks(models.Model):
   titulo = models.CharField(max_length=200)
   status = models.CharField(max_length=15)
   completed = models.BooleanField(default=0)
   
   def __str__(self):
      return self.name

class Epic(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name


# Association table
class Association(models.Model):
    table1 = models.ForeignKey(Tasks, on_delete=models.CASCADE)
    table2 = models.ForeignKey(Epic, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.table1} <-> {self.table2}"