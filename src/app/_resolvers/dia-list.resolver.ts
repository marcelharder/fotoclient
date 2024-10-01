import { ResolveFn } from '@angular/router';
import { slideModel } from '../_models/slideModel';
import { ImageService } from '../_services/image.service';
import { inject } from '@angular/core';
export const DiaListResolver: ResolveFn<slideModel[] | null> = (
  route,
  state
) => {
  const imageService = inject(ImageService);

  const result = route.paramMap.get('id');
  if (!result) return null;

  return imageService.getDiasFromCategory(+result);
};
