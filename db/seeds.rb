greetings = [
  'Aslam o Alikum',
  'Hola',
  'Hello',
  "What's up",
  'How you doing',
  'Hi',
  'Salut'
]

puts 'creating Greetings...'

greetings.each do |greet|
  Greeting.create!(greetings: greet)
end
