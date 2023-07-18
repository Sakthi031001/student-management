from rest_framework import serializers
from .models import Students

class Students_ser(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = ('student_id','firstname','lastname','email','course')
