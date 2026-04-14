package com.placeti.avaliacao.service;

import com.placeti.avaliacao.dto.CidadeDTO;
import com.placeti.avaliacao.model.Cidade;
import com.placeti.avaliacao.repository.CidadeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjetoService {


    private CidadeRepository repository;

    public ProjetoService(CidadeRepository repository) {
        this.repository = repository;
    }

    public CidadeDTO pesquisarCidade(Long id) {
        Cidade cidade = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cidade não encontrada"));

        return CidadeDTO.fromEntity(cidade);
    }

    public List<CidadeDTO> pesquisarCidades() {
        return repository.findAll()
                .stream()
                .map(CidadeDTO::fromEntity)
                .toList();
    }

    public void incluirCidade(CidadeDTO dto) {
        Cidade cidade = dto.toEntity();
        repository.save(cidade);
    }

    public void alterarCidade(CidadeDTO dto) {
        Cidade cidade = repository.findById(dto.id())
                .orElseThrow(() -> new RuntimeException("Cidade não encontrada"));

        cidade.setNome(dto.nome());
        cidade.setUf(dto.uf());
        cidade.setCapital(dto.capital());

        repository.save(cidade);
    }

    public void excluirCidade(Long idCidade) {
        repository.deleteById(idCidade);
    }
}