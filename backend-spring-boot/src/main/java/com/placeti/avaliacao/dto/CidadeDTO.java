package com.placeti.avaliacao.dto;

import com.placeti.avaliacao.model.Cidade;

public record CidadeDTO(
        Long id,
        String nome,
        String uf,
        Boolean capital
) {

    public static CidadeDTO fromEntity(Cidade cidade) {
        return new CidadeDTO(
                cidade.getId(),
                cidade.getNome(),
                cidade.getUf(),
                cidade.getCapital()
        );
    }

    public Cidade toEntity() {
        Cidade cidade = new Cidade();
        cidade.setId(this.id);
        cidade.setNome(this.nome);
        cidade.setUf(this.uf);
        cidade.setCapital(this.capital);
        return cidade;
    }
}