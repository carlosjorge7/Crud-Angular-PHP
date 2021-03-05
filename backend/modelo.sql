use tecdinvoice;
drop table registros;
create table registros(
	idRegistro int primary key IDENTITY(1, 1),
	codigo varchar(12),
	nombre varchar(200),
	direccion varchar(200),
	poblacion varchar(100),
	cp varchar(50),
	ciudad varchar(100),
	telefono varchar(20),
	email varchar(100),
	created_at date,
	updated_at date
) 

-- añadir
ALTER PROCEDURE [dbo].[p_registro_add]
@codigo varchar(12),
@nombre varchar(200),
@direccion varchar(200),
@poblacion varchar(100),
@cp varchar(50),
@ciudad varchar(100),
@telefono varchar(20),
@email varchar(100)
AS
BEGIN
	INSERT INTO registros(
		codigo,
		nombre,
		direccion,
		poblacion,
		cp,
		ciudad,
		telefono,
		email,
		created_at,
		updated_at
	)
	VALUES(
			@codigo,
			@nombre,
			@direccion,
			@poblacion,
			@cp,
			@ciudad,
			@telefono,
			@email,
			GETDATE(),
			GETDATE()	
		)
END

-- modificar 
ALTER PROCEDURE [dbo].[p_registro_update]
@idRegistro varchar(25),
@codigo varchar(12),
@nombre varchar(200),
@direccion varchar(200),
@poblacion varchar(100),
@cp varchar(50),
@ciudad varchar(100),
@telefono varchar(20),
@email varchar(100)
AS
BEGIN
        UPDATE registros
        SET 
		codigo = @codigo,
		nombre = @nombre,
		direccion = @direccion,
		poblacion = @poblacion,
		cp = @cp,
		ciudad = @ciudad,
		telefono = @telefono,
		email = @email,
		updated_at = GETDATE()
		WHERE idRegistro = CONVERT(INT, @idRegistro)
END


--- obtener
ALTER PROCEDURE [dbo].[p_registro_id]
@idRegistro varchar(25)
AS
BEGIN

	IF @idRegistro <> ''
		BEGIN
				SELECT idRegistro, codigo, nombre, direccion,  poblacion, cp, ciudad, telefono, email,
				CONVERT(VARCHAR , dbo.registros.created_at, 111) AS created_at, 
				CONVERT(VARCHAR , dbo.registros.updated_at, 111) AS updated_at 
				FROM registros
				WHERE idRegistro = CONVERT(INT, @idRegistro)
				PRINT 'registro leido'
		END
	ELSE
		BEGIN
			PRINT 'el registro no existe'
		END
	
END
-- listar
ALTER PROCEDURE [dbo].[p_registro_list]
AS
BEGIN
		SELECT idRegistro, codigo, nombre, direccion,  poblacion, cp, ciudad, telefono, email,
		CONVERT(VARCHAR , dbo.registros.created_at, 111) AS created_at, 
		CONVERT(VARCHAR , dbo.registros.updated_at, 111) AS updated_at 
		FROM registros
END

-- borrar
ALTER PROCEDURE [dbo].[p_registro_delete]
@idRegistro varchar(25)
AS
BEGIN
	DELETE FROM registros WHERE idRegistro = CONVERT(INT, @idRegistro)
END