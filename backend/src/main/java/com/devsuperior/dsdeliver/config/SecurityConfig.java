package com.devsuperior.dsdeliver.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	// CONFIGURAÇÃO DE SEGURANÇA DA APLICAÇÃO (VER MAIS SOBRE O ASSUNTO)

	@Autowired // VER MAIS SOBRE INJEÇÃO DE DEPENDÊNCIA
	private Environment env;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		if (Arrays.asList(env.getActiveProfiles()).contains("test")) {
			http.headers().frameOptions().disable();
		}

		http.cors().and().csrf().disable(); // Desabilitando o csrf que é um tipo de ataque baseado em sessão
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		// No código acima diz que não armazena estado
		http.authorizeRequests().anyRequest().permitAll(); // Nesse código estamos dando total acesso a todas as
															// requisiçoes
		/*
		 * A aplicação é baseada em REST, ou seja, ela não guarda dados em seção, não
		 * irá ter perigo de sofrer esse tipo de ataque (CSRF)
		 */
	}

	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration().applyPermitDefaultValues();
		configuration.setAllowedMethods(Arrays.asList("POST", "GET", "PUT", "DELETE", "OPTIONS"));
		final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;

		/*
		 * Basicamente é que todo navegador POR PADRÃO ele bloqueia o acesso (Cors)
		 * quando uma aplicação ta em um domínio e tenta acessar uma outra aplicação que
		 * tá em outro domínio. Ou seja, por padrão é bloqueado por motivos de
		 * segurança. Como nosso Backend vai ser hospedado em uma aplicação e o FrontEnd
		 * vai ser hospedado em outra aplicação, nós temos que fazer essa liberação
		 * (cors) para que o FrontEnd possa acessar o BackEnd.
		 */
	}
}