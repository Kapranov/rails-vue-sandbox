if Rails.env.development?
  Employee.destroy_all

  puts "----------| Creating Employees |----------"

  EmployeeCreateService.new.call
  puts ' CREATED Total Employees: ' << "#{Employee.count}"
  puts "------------------------------------------"
end

if Rails.env.test?; end

if Rails.env.production?; end
