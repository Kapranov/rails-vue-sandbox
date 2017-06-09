class BookCreateService
  def call
    9.times do
      Book.create(
        title: Faker::Book.title,
        like_count: rand(0..9),
        editable: rand > 0.5
      )
    end
  end
end

