-- Create the vechai database
CREATE DATABASE vechai;
GO

USE vechai;
GO

-- Create the User table
CREATE TABLE [user]
(
    userId INT IDENTITY(1, 1) PRIMARY KEY,
    name NVARCHAR(50) NOT NULL,
    email NVARCHAR(50) NOT NULL,
    phone NVARCHAR(15) NOT NULL,
    [password] NVARCHAR(20) NOT NULL,
    imageURL NVARCHAR(100)
);
GO

-- Create the Location table
CREATE TABLE Location
(
    locationId INT IDENTITY(1, 1) PRIMARY KEY,
    houseNumber NVARCHAR(20),
    street NVARCHAR(50),
    district NVARCHAR(30),
    city NVARCHAR(30)
);
GO

-- Create the WorkTime table
CREATE TABLE WorkTime
(
    worktimeId INT IDENTITY(1, 1) PRIMARY KEY,
    startWorktimeId TIME,
    endWorktimeId TIME,
    workDate DATE
);
GO

-- Create the Schedule table
CREATE TABLE Schedule
(
    scheduleId INT IDENTITY(1, 1) PRIMARY KEY,
    worktimeId INT,
    locationId INT,
    FOREIGN KEY (locationId) REFERENCES Location(locationId),
    FOREIGN KEY (worktimeId) REFERENCES WorkTime(worktimeId)
);
GO

-- Create the TrashCategory table
CREATE TABLE TrashCategory
(
    categoryId INT IDENTITY(1, 1) PRIMARY KEY,
    price DECIMAL(18, 2) CHECK (price > 0),
    categoryName NVARCHAR(30) NOT NULL,
    imageURL NVARCHAR(100)
);
GO

-- Create the OrderTransaction table
CREATE TABLE OrderTransaction
(
    orderId INT IDENTITY(1, 1) PRIMARY KEY,
    timeCreate DATETIME,
    scheduleId INT, 
	userId INT,
    FOREIGN KEY (userId) REFERENCES [user](userId),

);
GO

ALTER TABLE OrderTransaction
ADD CONSTRAINT FK_Schedule FOREIGN KEY (scheduleId) references schedule(scheduleId)

-- Create the DetailOrder table
CREATE TABLE DetailOrder
(
    orderLineId INT IDENTITY(1, 1) PRIMARY KEY,
    amount DECIMAL(18, 2) CHECK (amount > 0),
    orderId INT,
    trashcategoryId INT,
    FOREIGN KEY (orderId) REFERENCES OrderTransaction(orderId),
    FOREIGN KEY (trashcategoryId) REFERENCES TrashCategory(categoryId)
);
GO

CREATE TABLE userLocation (
	userlocationId INT IDENTITY(1, 1) PRIMARY KEY,
	location_userId INT,
	foreign key (location_userId) references [user](userid),
    houseNumber NVARCHAR(20),
    street NVARCHAR(50),
    district NVARCHAR(30),
    city NVARCHAR(30)
);

