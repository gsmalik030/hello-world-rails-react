module Api
  module V1
    class GreetingsController < ApplicationController
      def index
        @greetings = Greeting.order('RANDOM()').first(1)
        render json: @greetings, status: :ok
      end
    end
  end
end
