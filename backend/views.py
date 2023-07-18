from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core.files.storage import default_storage
from rest_framework.decorators import api_view
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response

from .models import Students
from .serializers import Students_ser

@csrf_exempt
def Students_api(request, pk=0):
    if request.method == 'GET':
        students = Students.objects.all()
        students_serialiers = Students_ser(students, many=True)
        return JsonResponse(students_serialiers.data, safe=False)
    elif request.method == 'POST':
        student_data = JSONParser().parse(request)
        students_serializer = Students_ser(data=student_data)
        if students_serializer.is_valid():
            students_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed To Add", safe=False)
    elif request.method == 'DELETE':
        student = Students.objects.get(student_id = pk)
        student.delete()
        return JsonResponse('student data deleted successfully',safe=False)
    

def home(request):
    return render(request,'backend/home.html')