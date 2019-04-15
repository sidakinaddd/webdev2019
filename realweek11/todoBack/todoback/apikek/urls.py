from django.urls import path
from . import views

urlpatterns = [
    path('task_lists/', views.task_list),
    path('task_lists/<int:pk>/', views.task_list_detail),
    path('task_lists/<int:pk>/tasks/', views.task_list_tasks),
    path('task_lists/<int:pk>/tasks/<int:ik>',views.task_list_tasks_detail)
]