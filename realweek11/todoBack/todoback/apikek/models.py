from django.db import models
import datetime
from django.contrib.auth.models import User


class TaskList(models.Model):
    name = models.CharField(max_length=200)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }

class Task(models.Model):
    name = models.CharField(max_length=200)
    created_at = models.DateTimeField()
    due_on = models.DateTimeField()
    status = models.CharField(max_length=200)
    task_list = models.ForeignKey(TaskList, on_delete=models.CASCADE)

    def __str__(self):
        return '{}: {}, {}, {}'.format(self.id, self.name,self.created_at,self.due_on)

    def to_json(self):
        return {
            'id':self.id,
            'name': self.name,
            'created_at': self.created_at,
            'due_on': self.due_on,
            'status': self.status
        }
