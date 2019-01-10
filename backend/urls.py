from django.urls import path

from . import views
from . import views_apis


urlpatterns = [
    path('', views.wheels_users_list, name='wheels_users_list'),
   path('delete-username/<res_id>/', views.delete_username, name='delete_username'),
]
