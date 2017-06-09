class EmployeeCreateService
  def call
    Employee.create(name: "Kapranov", email: "lugatex@yahoo.com", manager: true)
  end
end

