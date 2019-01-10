from django.db import models
import uuid
 


class WheelsUsers(models.Model):
    username =models.CharField( max_length=150)
    email = models.CharField( max_length=150)
    password = models.CharField( max_length=150)
 
 


   


 