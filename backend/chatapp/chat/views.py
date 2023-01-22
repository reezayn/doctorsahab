from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .pusher import pusher_client

# Create your views here.
class MessageAPIView(APIView):
    
    def post(self, request):                            #my-channel = chat #my-event = message
        pusher_client.trigger('chat', 'message', {
            'username': request.data['username'],
            'message': request.data['message'],
        })         

        return Response([])                         
