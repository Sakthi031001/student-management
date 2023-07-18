from django.db import models

class Students(models.Model):
    student_id = models.AutoField(primary_key=True)
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    email = models.EmailField()
    course = models.CharField(max_length=100)
