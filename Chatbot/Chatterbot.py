#import libraries
from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
from chatterbot.trainers import ChatterBotCorpusTrainer
import os

#Create a chatbot
bot = ChatBot('Friend')
trainer = ChatterBotCorpusTrainer(bot)
trainer.train('chatterbot.corpus.english')

#chat feature
while True:
    message = input('\t\t\tYou:')
    if message.strip() != 'Bye':
        reply = bot.get_response(message)
        print('Friend:',reply)
    if message.strip() ==' Bye':
        print('Friend: Bye')
        break