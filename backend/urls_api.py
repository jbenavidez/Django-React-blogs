from django.urls import path

from . import views
from . import views_apis


urlpatterns = [
     
     path('',  views_apis.UsernameList.as_view()),
     #path('login',  views_apis.UserLoginAPIView.as_view(), name= "login") ,
     path('<int:pk>/', views_apis.UsernameDetail.as_view())  
 
]
