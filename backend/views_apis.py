from rest_framework import generics

from . import models
from . import serializers
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK , HTTP_400_BAD_REQUEST
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny




class UsernameList(generics.ListCreateAPIView):
  queryset = models.WheelsUsers.objects.all()
  serializer_class = serializers.WheelsSerializer



class ArticleCatoriesList(generics.ListCreateAPIView):
  queryset = models.ArticleCategory.objects.all()
  serializer_class = serializers.ArticleCategoriesSerializer


class UsernameDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = models.WheelsUsers.objects.all()
  serializer_class = serializers.WheelsSerializer


class UserLoginAPIView(APIView):
  permission_classes =[AllowAny]
  serializer_class = serializers.WheelsUserLoginSerializer 
  #since we are using apiview we have to  use the method that our user will execute ex. def put(), def get(), def post() 
  def post(self, request, *args, **kwargs):
    data = request.data  #get data from call
    serializer = serializers.WheelsUserLoginSerializer(data = data)
    if serializer.is_valid(raise_exception = True):
      new_data = serializer.data
      return Response(new_data , status = HTTP_200_OK)
    return Response(serializer.errors, status = HTTP_400_BAD_REQUEST)
    

