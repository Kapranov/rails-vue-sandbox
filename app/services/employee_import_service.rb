require 'csv'

class EmployeeImportService
  def self.import_csv(csv_file)
    logger = Logger.new(STDOUT)

    Employee.delete_all

    CSV.foreach(csv_file.path, headers: true, col_sep: ';') do |row|
      logger.debug "Employee hash: #{row.to_hash}"
      Employee.create! row.to_hash.symbolize_keys
    end
  end
end
