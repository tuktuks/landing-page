import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { getImageUrl } from 'utils/getImageUrl'
import { SectionAboutProjectProps } from 'types/api'

const SectionAboutProject = ({
  title,
  description,
  image
}: SectionAboutProjectProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src={getImageUrl(image.data.url)}
          alt={image.data.alternativeText}
          loading="lazy"
        />
        <div>
          <Heading>{title}</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
