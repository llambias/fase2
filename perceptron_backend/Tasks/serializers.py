from rest_framework import serializers
from .models import Tasks
class TaskSerializers(serializers.Modelserializars):
    class Meta:
        model = Tasks
        fields = (id,titulo,completed,status,complete_at,updated_at)