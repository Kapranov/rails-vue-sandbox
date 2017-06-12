class BookCreateService
  def call
    # random_boolean = rand(2) > 0
    # random_boolean = rand(2) == 1
    # random_boolean = rand > 0.5
    # random_boolean = [true, false].sample
    # random_boolean = rand(2) == 1 ? true : false

    5.times do
      Book.create!(title: Faker::Book.title, like_count: rand(0..9))
    end
  end
end

