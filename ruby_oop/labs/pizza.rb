require_relative './food.rb'

class Pizza < Food

  def initialize(sugar, protein, fat, weight)
    super(sugar, protein, fat)
    @weight = weight
  end

end