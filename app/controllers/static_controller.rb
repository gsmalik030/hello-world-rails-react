class StaticController < ApplicationController
    def index
        render json: {status: "Working..."}
    end
end
