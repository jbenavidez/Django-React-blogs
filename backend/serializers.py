from rest_framework import serializers
from django.db.models import Q 
from . import models
from django.template.defaultfilters import slugify

WheelsUSer  = models.WheelsUsers
article_catories = models.ArticleCategory


class WheelsSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.WheelsUsers
    fields = '__all__'


  def validate(self,data):
    #check is user email exist
    email = data['email']
    user_info = WheelsUSer.objects.filter(email=email)
    if user_info.exists():
      raise serializers.ValidationError("this email is taken")

    return data

  def create(self, validated_data):
    # not required to use this functions, I create4d for example porpuses,
    username = validated_data['username']
    email= validated_data['email']
    password = validated_data['password']

    user_objct = WheelsUSer(
                    username = username,
                    email = email,
                     password = password,
    )
    user_objct.save()
    return validated_data

#USER LOGIN CLASS 
class WheelsUserLoginSerializer(serializers.ModelSerializer):
  token = serializers.CharField(allow_blank= True, read_only = True)
  username =  serializers.CharField(allow_blank= True, read_only = True)
  class Meta:
    model = models.WheelsUsers
    fields = [
            'email',
            'password',
            'token',
            'username'
          ]


  def validate(self,data):
    user_obj = None
    username  = None 
    email = data.get("email", None)
    password = data['password']
    if not email:
      raise serializers.ValidationError("Email is required")

    user_info = WheelsUSer.objects.filter(
                Q(email= email) 
                

                 ).distinct()
    if user_info.exists() and user_info.count() ==1:
      user_obj = user_info.first()
    else:
      raise serializers.ValidationError("This Email/password is not valid.")


    if user_obj:
      #if not user_obj.check_password(password): when you store on the user table use this command to check the password
      username = user_obj.username
      if   user_obj.password != password:
        raise serializers.ValidationError("incorrect password")

    data["token"] = "tester_token"
    data["username"] = username
        

    return data


#ARTICLE CATEGORIES API 
class ArticleCategoriesSerializer(serializers.ModelSerializer):
  slug =  serializers.CharField(allow_blank= True , read_only = True)
  class Meta:
    model = article_catories
    fields =  [
            'name',
            'slug',
        
          ]


 

  def create(self, validated_data):
    # not required to use this functions, I create4d for example porpuses,
    name = validated_data['name']
    slug =slugify(name)
 
    user_objct = article_catories(
                    name = name,
                    slug = slug,
                     
    )
    user_objct.save()
    return validated_data