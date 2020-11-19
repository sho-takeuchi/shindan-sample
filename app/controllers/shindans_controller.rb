class ShindansController < ApplicationController
  def question
    @shindans = Shindan.all
  end
end
