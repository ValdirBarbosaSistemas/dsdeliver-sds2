package com.devsuperior.dsdeliver.dto;

import java.io.Serializable;

import com.devsuperior.dsdeliver.entities.Product;

public class ProductDTO implements Serializable {
//FIXME VER DEPOIS A IMPORTÂNCIA DO (DTO) COM MAIS AFINCO

	/*
	 * DTO é um objeto simples, para trafegar os dados sem que esse objeto seja
	 * atrelado a uma conexão com o banco de dados, ou uma transação. TODA CAMADA DE
	 * CONEXÃO COM O BANCO FICARÁ NA CAMADA DE SERVICO, depois que precisar de tudo
	 * na camada de servico, eu vou copiar os dados das entidades para novos objetos
	 * e dessa forma eu consigo gerar um controlador mais simples. Significa que
	 * pelo conceito do padrão de camadas, ele só vai mandar ao cliente os dados do
	 * que EU PERMITIR. (VER MAIS SOBRE DTO)
	 */
	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private Double price;
	private String description;
	private String imageUri;

	public ProductDTO() {

	}

	public ProductDTO(Long id, String name, Double price, String description, String imageUri) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.description = description;
		this.imageUri = imageUri;
	}

	// No DTO vemos que ele pega os dados da ENTIDADE Product sem precisar do THIS,
	// pois
	public ProductDTO(Product entity) {
		id = entity.getId();
		name = entity.getName();
		price = entity.getPrice();
		description = entity.getDescription();
		imageUri = entity.getImageUri();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImageUri() {
		return imageUri;
	}

	public void setImageUri(String imageUri) {
		this.imageUri = imageUri;
	}

}
