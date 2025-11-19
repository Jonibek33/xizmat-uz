from django.shortcuts import render

# Create your views here.
from .models import Product
from .serializers import ProductSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class ProductAPIView(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True, context={"request": request})
        return Response(serializer.data, status=status.HTTP_200_OK)
        
    def post(self, request):
        serializer = ProductSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductItemAPIView(APIView):
    def get(self, request, pk, *args, **kwargs):
        if product := Product.objects.get(id=pk):
            serializer = ProductSerializer(product, context={"request": request})
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk, *args, **kwargs):
        if product := Product.objects.get(id=pk):
            serializer = ProductSerializer(product, data=self.request.data, context={"request": request})
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk, *args, **kwargs):
        if product := Product.objects.get(id=pk):
            product.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_404_NOT_FOUND)