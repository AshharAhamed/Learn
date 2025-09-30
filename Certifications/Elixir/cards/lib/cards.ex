defmodule Cards do
  def create_deck do
    ["Ace of Spades", "Two of Spades", "Three of Spades"]
  end

  def shuffle(deck) do
    Enum.shuffle(deck)
  end
end
