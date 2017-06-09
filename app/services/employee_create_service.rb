class EmployeeCreateService
  def call
    Employee.create(name: "Brandon", email: "brandon.keao@gmail.com", manager: true)
  end
end

