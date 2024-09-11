package com.example.demo;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtUtil {
	private static final String SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256).getEncoded();

	public static String generateToken(String subject) {
		return Jwts.builder()
				.setSubject(subject)
				.signWith(SignatureAlgorithm.HS256, SECRET_KEY)
				.compact();
	}

	public static boolean validateToken(String token) {
		try {
			Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	public static String getSubjectFromToken(String token) {
		Claims claims = Jwts.parser()
				.setSigningKey(SECRET_KEY)
				.parseClaimsJws(token)
				.getBody();
		return claims.getSubject();
	}
}
