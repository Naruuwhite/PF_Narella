package com.portfolio.snp.Interface;

import com.portfolio.snp.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    //Traer una lista de personas
    public List<Persona> getPersona ();
    //Guardar un objeto de tipo persona
    public void savePersona(Persona persona);
    //Eliminar un usuario por id
    public void deletePersona (Long id) ;
    //Buscar una persona por id
    public Persona findPersona (Long id) ;
    
}
