 
from django.contrib import admin
from django.urls import include,  path, re_path  
from django.conf.urls import   url
from django.views.generic import TemplateView
from django.views.generic.base import RedirectView
import re
from backend.views_apis import  UserLoginAPIView, ArticleCatoriesList

urlpatterns = [
    url(r'^$', RedirectView.as_view(url='-/home')),
    path('admin-home/', include('backend.urls')),
    path('admin/', admin.site.urls),
    path('api/v1/createuser/', include('backend.urls_api')),
    path('api/v1/login/',  UserLoginAPIView.as_view(), name= "login"),
    path('api/v1/categories/',  ArticleCatoriesList.as_view(), name= "login"),
    re_path(r'^-/?' ,TemplateView.as_view(template_name ="index.html")) #open this route for react app
]   
