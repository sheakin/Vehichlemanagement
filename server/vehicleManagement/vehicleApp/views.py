from django.shortcuts import render
from .models import Customer,Services
from .serializers import CustomerSerializer,ServiceSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
class CustomerView(ModelViewSet):
    queryset=Customer.objects.all()
    serializer_class=CustomerSerializer

    @action(methods=["POST"],detail=True)
    def add_services(self,request,*args,**kwargs):
        id=kwargs.get('pk')
        customer=Customer.objects.get(id=id)
        serializer=ServiceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(customer=customer)
            return Response(data=serializer.data)
        else:
            return Response(data=serializer.errors,status=status.HTTP_406_NOT_ACCEPTABLE)


