from rest_framework import serializers
from .models import Customer,Services



class ServiceSerializer(serializers.ModelSerializer):
    customer=serializers.CharField(read_only=True)
    class Meta:
        model=Services
        fields="__all__"



class CustomerSerializer(serializers.ModelSerializer):
    date=serializers.DateField(read_only=True)
    status=serializers.CharField(read_only=True)
    service=ServiceSerializer(many=True,read_only=True)
    total_price=serializers.IntegerField(read_only=True)
    class Meta:
        model=Customer
        fields="__all__"



