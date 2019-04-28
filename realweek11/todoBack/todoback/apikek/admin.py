from django.contrib.auth.admin import admin

from .models import Task, TaskList


admin.site.register(Task)
admin.site.register(TaskList)


