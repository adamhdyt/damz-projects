"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Award, CheckCircle2, Maximize2, ShieldCheck, Sparkles } from "lucide-react"
import { LightboxModal, LightboxItem } from "@/components/shared/lightbox-modal"

const CERTIFICATIONS_DATA: LightboxItem[] = [
  {
    title: "Oracle Autonomous Database Cloud 2025 Certified Professional",
    org: "Oracle University",
    image: "/images/certs/eCertificate_Oracle_Autonomous_Database.jpg",
    year: "2025",
    credentialType: "Cloud Professional",
  },
  {
    title: "Oracle Cloud Database Service Administration 2025 Certified Professional",
    org: "Oracle University",
    image: "/images/certs/eCertificate_Oracle_Cloud_Database_Service.jpg",
    year: "2025",
    credentialType: "Cloud Professional",
  },
  {
    title: "Oracle Database 19c: Performance Management and Tuning",
    org: "Oracle University",
    image: "/images/certs/Sertifikat_Oracle_Performance_Management_and_Tuning.jpg",
    year: "Specialization",
    credentialType: "Performance Tuning",
  },
  {
    title: "Oracle Database 19c Administration Workshop",
    org: "Oracle University",
    image: "/images/certs/SertifikatOracle_Database19cAdministrationWorkshop.jpg",
    year: "Core DBA",
    credentialType: "Database Architecture",
  },
  {
    title: "Oracle Database 19c RAC Administration Workshop",
    org: "Oracle University",
    image: "/images/certs/SertifikatOracle_Database19cRACAdministrationWorkshop.jpg",
    year: "High Availability",
    credentialType: "Cluster & RAC",
  },
  {
    title: "Oracle Database 19c: Backup and Recovery",
    org: "Oracle University",
    image: "/images/certs/SertifikatBackup19cRecovery.jpg",
    year: "Disaster Recovery",
    credentialType: "RMAN & Standby",
  },
]

export function CertificationsGrid() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const openLightbox = (index: number) => {
    setSelectedIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section id="certifications" className="relative px-6 py-20 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-border/60">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
            <Award className="size-3.5 text-primary" />
            Verified Credentials & Accreditations
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Oracle Certified Expertise
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Six verified credentials across cloud autonomous systems, high-availability RAC clusters, disaster recovery, and query optimization.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground bg-muted/50 border border-border/60 px-3.5 py-1.5 rounded-full self-start md:self-auto">
          <CheckCircle2 className="size-3.5 text-emerald-500" />
          <span>Oracle University Validated</span>
        </div>
      </div>

      {/* Grid of 6 Certificates */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {CERTIFICATIONS_DATA.map((cert, index) => (
          <div
            key={cert.title}
            onClick={() => openLightbox(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                openLightbox(index)
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`View certificate: ${cert.title}`}
            className="group relative flex flex-col justify-between rounded-3xl border border-border/70 bg-card/80 backdrop-blur-sm p-5 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {/* Image Thumbnail with Overlay */}
            <div>
              <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-muted/60 border border-border/40 shadow-inner">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 rounded-full bg-background/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-foreground border border-border/60 shadow-sm">
                  <ShieldCheck className="size-3 text-primary" />
                  <span>{cert.credentialType}</span>
                </div>

                {/* Hover Reveal Expand Button */}
                <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-xs font-semibold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                    <Maximize2 className="size-3.5" />
                    Preview Certificate
                  </span>
                </div>
              </div>

              {/* Title & Issuer Info */}
              <div className="mt-5">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
                  <span className="font-medium text-primary">{cert.org}</span>
                  <span className="font-mono">{cert.year}</span>
                </div>
                <h3 className="text-base font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
              </div>
            </div>

            {/* Bottom Footer Details */}
            <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Sparkles className="size-3 text-amber-500" />
                Verified Credential
              </span>
              <span className="font-medium text-foreground group-hover:translate-x-0.5 transition-transform">
                Click to expand ↗
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        items={CERTIFICATIONS_DATA}
        initialIndex={selectedIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  )
}
