package com.devsuperior.dsdeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsdeliver.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	/*
	 * No código acima ele cria tudo que for relacionado ao JPA no spring como
	 * criar, buscar, deletar entre outros...Coloca o tipo, que no caso é a entidade
	 * que voce quer acessar e o tipo da chave primaria.
	 */
	
	// FIXME VER DEPOIS SOBRE SPRING DATA JPA - (QUERY METHODS)
	List<Product> findAllByOrderByNameAsc();
}
