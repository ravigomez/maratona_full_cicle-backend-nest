import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { Categoria } from './models/categoria.model';

@Controller()
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get('categories')
  getCategorias() {
    return this.categoriaService.findAll();
  }

  @Post('categories')
  postCategoria(@Body() categoria: Categoria) {
    return this.categoriaService.create(categoria);
  }
}
