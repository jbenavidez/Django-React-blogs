from django.shortcuts import render
from django.http import HttpResponse ,JsonResponse
from django.shortcuts import render , get_object_or_404 , redirect
from django.contrib import messages
from .models import WheelsUsers

def wheels_users_list(request):
    """
    THIS FUNCTION RENDER ALL THE USERS IN THE SYSTEM
    """

    #GET ALL WHEELS USERS IN THE SYSTEM 
    all_wheel_users = WheelsUsers.objects.all()
     
    args_to_template = {
        "all_wheel_users":all_wheel_users
            

    }
    return render(request, 'backend/list.html', args_to_template)



def delete_username(request,res_id):
    """
    THIS FUNCTION IS USE TO DELETE USERNAME FROM WHEELSUSER MODEL
    """
    username_details =  get_object_or_404(WheelsUsers, id=res_id) 
    the_username = username_details.username
    username_details.delete()
   
    the_message ="  {} was succesfully deleted.".format(the_username)
    messages.success(request, the_message)
    return   redirect('/admin-home')