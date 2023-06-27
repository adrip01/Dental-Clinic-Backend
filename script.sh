#############################################################

# create the database
sequelize db:create


# create Role model
sequelize model:generate --name Role --attributes "role:string"

# create Speciality model
sequelize model:generate --name Speciality --attributes "speciality:string"

# create User model
sequelize model:generate --name User --attributes "role_id:integer,user_first_name:string,user_last_name:string,birthday:date,email:string,password:string,phone_number:integer"

# create Customer model
sequelize model:generate --name Customer --attributes "user_id:integer"

# create Doctor model
sequelize model:generate --name Doctor --attributes "user_id:integer,spec_id:integer"

# create Appointments model
sequelize model:generate --name Appointment --attributes "customer_id:integer,doctor_id:integer,date:date,time:time"

#############################################################

# execute migration
sequelize db:migrate

# undo migration
sequelize db:migrate:undo:all

# create seed
sequelize seed:generate --name seed-appointment

# execute seed
sequelize db:seed:all
