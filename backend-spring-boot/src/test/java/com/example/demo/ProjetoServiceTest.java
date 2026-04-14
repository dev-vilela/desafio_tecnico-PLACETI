package com.example.demo;

import com.placeti.avaliacao.dto.CidadeDTO;
import com.placeti.avaliacao.model.Cidade;
import com.placeti.avaliacao.repository.CidadeRepository;
import com.placeti.avaliacao.service.ProjetoService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.hibernate.validator.internal.util.Contracts.assertNotNull;
import static org.junit.jupiter.api.Assertions.*;

class ProjetoServiceTest {

    @Mock
    private CidadeRepository repository;

    @InjectMocks
    private ProjetoService service;

    private Cidade cidade;

    @BeforeEach
    void setup() {
        MockitoAnnotations.openMocks(this);

        cidade = new Cidade();
        cidade.setId(1L);
        cidade.setNome("Brasília");
        cidade.setUf("DF");
        cidade.setCapital(true);
    }


    @Test
    void deveBuscarCidadePorId() {
        when(repository.findById(1L)).thenReturn(Optional.of(cidade));

        CidadeDTO resultado = service.pesquisarCidade(1L);

        assertNotNull(resultado);
        assertEquals("Brasília", resultado.nome());
        verify(repository, times(1)).findById(1L);
    }

    // TESTE: listar cidades
    @Test
    void deveListarCidades() {
        when(repository.findAll()).thenReturn(List.of(cidade));

        List<CidadeDTO> lista = service.pesquisarCidades();

        assertEquals(1, lista.size());
        assertEquals("Brasília", lista.get(0).nome());
        verify(repository, times(1)).findAll();
    }

    //TESTE: incluir cidade
    @Test
    void deveIncluirCidade() {
        CidadeDTO dto = new CidadeDTO(null, "Goiânia", "GO", false);

        service.incluirCidade(dto);

        verify(repository, times(1)).save(any(Cidade.class));
    }

    //TESTE: alterar cidade
    @Test
    void deveAlterarCidade() {
        CidadeDTO dto = new CidadeDTO(1L, "Goiânia", "GO", false);

        when(repository.findById(1L)).thenReturn(Optional.of(cidade));

        service.alterarCidade(dto);

        verify(repository, times(1)).save(any(Cidade.class));
        assertEquals("Goiânia", cidade.getNome());
    }

    //TESTE: excluir cidade
    @Test
    void deveExcluirCidade() {
        service.excluirCidade(1L);

        verify(repository, times(1)).deleteById(1L);
    }
}
