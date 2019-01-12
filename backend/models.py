from django.db import models
import uuid
 


class WheelsUsers(models.Model):
    username =models.CharField( max_length=150)
    email = models.CharField( max_length=150)
    password = models.CharField( max_length=150)
 
 


class  ArticleCategory(models.Model):
    name = models.CharField( max_length=150)
    slug = models.CharField( max_length=150)  
 

class Articles(models.Model):
    title = models.TextField()
    content = models.TextField()
    imgUrl  = models.TextField()
    wheel_user_key =  models.ForeignKey(WheelsUsers, blank=True, null=True, on_delete=models.SET_NULL)
    category_key = models.ForeignKey(ArticleCategory, blank=True, null=True, on_delete=models.SET_NULL)



 