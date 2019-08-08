import React, { Component } from 'react'

import { FinContext } from '../FinContext'
import { LiveServiceDemo } from '../LiveServiceDemo'
import { Markdown } from '../Markdown'

import styles from './styles.module.css'

export class IntroSection extends Component {
  render() {
    return (
      <FinContext.Consumer>
        {project => (
          <section className={styles.container}>
            <div className={styles.content}>
              <LiveServiceDemo
                project={project}
                deployment={project.deployment}
                service={project.deployment.services[0]}
              />
              {/*
              <Markdown
                source={project.deployment.readme}
              />
              */}
            </div>
          </section>
        )}
      </FinContext.Consumer>
    )
  }
}
