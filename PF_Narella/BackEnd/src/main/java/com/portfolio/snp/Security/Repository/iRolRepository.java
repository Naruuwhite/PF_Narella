
package com.portfolio.snp.Security.Repository;

import com.portfolio.snp.Security.Entity.Rol;
import com.portfolio.snp.Security.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

 public interface iRolRepository extends JpaRepository <Rol, Integer> {
        Optional<Rol> findByRolNombre(RolNombre rolNombre);
    }

