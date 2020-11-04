module StudentsHelper

  def assign_tec_id(email)
    if (email.split(/@/).second != 'itesm.mx' and email.split(/@/).second != 'tec.mx')
      raise "Correo debe ser de dominio @tec.mx o @itesm.mx"
    end
    email.split(/@/).first.upcase
  end
end
